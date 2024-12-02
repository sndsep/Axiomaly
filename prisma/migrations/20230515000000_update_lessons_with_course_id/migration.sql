-- Primero, obtenemos un ID de curso existente
DO $$
DECLARE
    existing_course_id TEXT;
BEGIN
    -- Intenta obtener un ID de curso existente
    SELECT id INTO existing_course_id FROM "Course" LIMIT 1;

    -- Si no hay cursos existentes, crea uno nuevo
    IF existing_course_id IS NULL THEN
        INSERT INTO "Course" (id, title, description, "instructorId", level, "createdAt", "updatedAt")
        VALUES (
            gen_random_uuid()::TEXT,
            'Curso por defecto',
            'Curso creado para migración',
            (SELECT id FROM "User" WHERE role = 'INSTRUCTOR' LIMIT 1),
            'BEGINNER',
            NOW(),
            NOW()
        )
        RETURNING id INTO existing_course_id;
    END IF;

    -- Actualiza las lecciones sin courseId
    UPDATE "Lesson"
    SET "courseId" = "cm3zzweos0000eooiubc8vgt9"
    WHERE "courseId" IS NULL;
END $$; 