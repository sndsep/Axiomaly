export class ApiError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message)
    this.name = "ApiError"
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}
