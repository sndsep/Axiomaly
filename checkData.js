// checkData.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkOnboardingProgress() {
  try {
    const results = await prisma.onboardingProgress.findMany({
      where: {
        currentStep: {
          in: [
            "CAREER_PATH",
            "SURVEY",
            "RECOMMENDATIONS",
            "PROFILE",
            "TOUR",
            "COMPLETED"
          ],
        },
      },
    });

    if (results.length > 0) {
      console.log('Registros encontrados:');
      console.log(results);
    } else {
      console.log('No se encontraron registros con los valores de enumeración especificados.');
    }
  } catch (error) {
    console.error('Error al verificar los datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkOnboardingProgress();