# Changesets

Esta carpeta almacena los cambios pendientes para el control de versiones y generación automática de changelogs mediante `@changesets/cli`.

Cuando realices un cambio en un componente que deba ser versionado y publicado, ejecuta:

```bash
npx changeset
```

El CLI te guiará para elegir si es un cambio `patch` (corrección), `minor` (nueva feature sin romper compatibilidad) o `major` (cambio con breaking change) y escribir un resumen del cambio.
