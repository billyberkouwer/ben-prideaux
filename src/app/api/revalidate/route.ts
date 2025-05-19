import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = { path?: string, _type?: string }

export async function POST(req: NextRequest) {
    try {
        if (!process.env.SANITY_REVALIDATE_SECRET) {
            return new Response(
                'Missing environment variable SANITY_REVALIDATE_SECRET',
                { status: 500 },
            )
        }

        const { isValidSignature, body } = await parseBody<WebhookPayload>(
            req,
            process.env.SANITY_REVALIDATE_SECRET,
        )

        if (!isValidSignature) {
            const message = 'Invalid signature'
            return new Response(JSON.stringify({ message, isValidSignature, body }), {
                status: 401,
            })
        } else if (!body?.path) {
            const message = 'Bad Request'
            return new Response(JSON.stringify({ message, body }), { status: 400 })
        }

        revalidatePath(body.path)

        let message = "";

        if (body._type === "projectPage") {
            message += `Updated route: ${body.path}`
            revalidateTag(body._type)
        }

        message += `, Updated route: ${body.path}`
        return NextResponse.json({ body, message })
    } catch (err) {
        console.error(err)
        return new Response((err as Error).message, { status: 500 })
    }
}