import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'; // Asegúrate de tener Prisma configurado

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { experienceLevel, interests, weeklyHours, goals } = req.body;

    try {
      // Aquí debes obtener el usuario actual (por ejemplo, desde la sesión)
      const userId = 'user-id'; // Reemplaza esto con la lógica para obtener el ID del usuario

      // Guardar las preferencias en la base de datos
      await prisma.user.update({
        where: { id: userId },
        data: {
          experienceLevel,
          interests,
          weeklyHours,
          goals,
        },
      });

      return res.status(200).json({ message: 'Preferences saved successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error saving preferences' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
