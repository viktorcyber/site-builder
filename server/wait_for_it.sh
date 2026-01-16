#!/bin/sh

echo "--- Starting Database Migration ---"
npx prisma generate && npx prisma migrate deploy

if [ $? -ne 0 ]; then
  echo "!!! Prisma migration failed. Exiting entrypoint."
  exit 1
fi

echo "--- Database Migration Complete ---"
exec "$@"