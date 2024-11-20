const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateOnboardingProgress() {
  try {
    const updatedRecords = await prisma.onboardingProgress.updateMany({
      where: {
        currentStep: {
          in: [
            'INTERESTS',
            'EXPERIENCE',
            'GOALS',
            'SCHEDULE',
            'BACKGROUND',
            'PORTFOLIO',
            'MENTORSHIP',
            'SURVEY_COMPLETED',
          ],
        },
      },
      data: {
        currentStep: 'NEW_VALID_VALUE', // Cambia esto por un valor válido
      },
    });

    console.log(`Registros actualizados: ${updatedRecords.count}`);
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateOnboardingProgress();
