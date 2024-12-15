// src/app/api/notifications/[id]/read/route.ts
export async function POST(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
  
      const notification = await prisma.notification.update({
        where: {
          id: params.id,
          userId: session.user.id
        },
        data: {
          read: true,
          readAt: new Date()
        }
      });
  
      return NextResponse.json(notification);
  
    } catch (error) {
      console.error('[NOTIFICATION_READ]', error);
      return new NextResponse('Internal error', { status: 500 });
    }
  }