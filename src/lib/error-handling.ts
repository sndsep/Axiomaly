export class AppError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleApiError(error: unknown, res: NextApiResponse) {
  console.error('API Error:', error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  return res.status(500).json({ error: 'Error interno del servidor' });
}

// Uso en una ruta API
import { handleApiError, AppError } from '@/lib/error-handling';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Lógica de la ruta
    if (someCondition) {
      throw new AppError('Mensaje de error específico', 400);
    }
  } catch (error) {
    handleApiError(error, res);
  }
}
