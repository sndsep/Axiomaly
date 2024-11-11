export class ApiError extends Error {
  public readonly statusCode: number
  public readonly code: string

  constructor(message: string, statusCode: number, code: string) {
    super(message)
    this.statusCode = statusCode
    this.code = code
    Error.captureStackTrace(this, this.constructor)
  }

  static BadRequest(message: string, code = 'BAD_REQUEST') {
    return new ApiError(message, 400, code)
  }

  static Unauthorized(message: string, code = 'UNAUTHORIZED') {
    return new ApiError(message, 401, code)
  }

  static Forbidden(message: string, code = 'FORBIDDEN') {
    return new ApiError(message, 403, code)
  }

  static NotFound(message: string, code = 'NOT_FOUND') {
    return new ApiError(message, 404, code)
  }

  static TooManyRequests(message: string, code = 'TOO_MANY_REQUESTS') {
    return new ApiError(message, 429, code)
  }

  static Internal(message: string, code = 'INTERNAL_ERROR') {
    return new ApiError(message, 500, code)
  }
}

