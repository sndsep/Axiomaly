export class UploadError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly statusCode: number
  ) {
    super(message)
    this.name = 'UploadError'
  }

  static invalidType() {
    return new UploadError(
      'File type not allowed',
      'INVALID_FILE_TYPE',
      400
    )
  }

  static exceededSize() {
    return new UploadError(
      'File exceeds maximum allowed size',
      'FILE_TOO_LARGE',
      400
    )
  }
}

