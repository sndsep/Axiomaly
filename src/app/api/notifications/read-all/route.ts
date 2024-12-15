// src/app/api/notifications/read-all/route.ts
export async function POST(req: Request) {
    try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
  
      await prisma.notification.updateMany({
        where: {
          userId: session.user.id,
          read: false
        },
        data: {
          read: true,
          readAt: new Date()
        }
      });
  
      return new NextResponse(null, { status: 200 });
  
    } catch (error) {
      console.error('[NOTIFICATIONS_READ_ALL]', error);
      return new NextResponse('Internal error', { status: 500 });
    }
  }