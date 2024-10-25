import Queue from 'bull'
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export const downloadQueue = new Queue('downloads', {
  redis: {
    port: 6379,
    host: process.env.REDIS_HOST || 'localhost',
  },
})

interface DownloadJob {
  userId: string
  resourceId: string
  fileName: string
}

export const addToDownloadQueue = async (data: DownloadJob) => {
  return await downloadQueue.add(data, {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  })
}

downloadQueue.process(async (job) => {
  const { userId, resourceId, fileName } = job.data
  
  try {
    // Lógica de procesamiento de descarga
    await processDownload(userId, resourceId, fileName)
    return { success: true }
  } catch (error) {
    console.error('Download queue error:', error)
    throw error
  }
})

async function processDownload(userId: string, resourceId: string, fileName: string) {
  // Implementar lógica de descarga
}

