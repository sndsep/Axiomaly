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

  return res.status(500).json({ error: 'Internal server error' });
}

// Usage in an API route
import { handleApiError, AppError } from '@/lib/error-handling';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Route logic
    if (someCondition) {
      throw new AppError('Specific error message', 400);
    }
  } catch (error) {
    handleApiError(error, res);
  }
}
