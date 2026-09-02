import { addInquiry } from '@/lib/data';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const id = await addInquiry({ ...data, status: 'new' });

    // Trigger WhatsApp notification via CallMeBot API
    const botPhone = process.env.CALLMEBOT_PHONE || '';
    const botKey = process.env.CALLMEBOT_API_KEY || '';
    if (botPhone && botKey) {
      const msg = encodeURIComponent(`New inquiry: ${data.type || 'unknown'} from ${data.name} (${data.phone || data.email || 'no contact'})`);
      // Fire-and-forget; don't block the response
      fetch(`https://api.callmebot.com/whatsapp.php?phone=${botPhone.replace('+', '')}&text=${msg}&apikey=${botKey}`).catch(() => {});
    }

    return Response.json({ ok: true, id }, { status: 200 });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
