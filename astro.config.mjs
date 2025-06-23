// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://richirastahs.github.io/AstroLibresScript/',
  base: '/AstroLibresScript/',
  integrations: [starlight({
    title: 'LibreScript',
    customCss: [
      './src/styles/custom.css',
      './src/fonts/font-face.css',
    ],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],

    sidebar: [
      {
        label: 'Introducción a Librescript',
        autogenerate: { directory: 'introduccion' },
      },
      {
        label: 'Sintaxis y Semántica',
        autogenerate: { directory: 'sintaxisysemantica' },
      },
      {
        label: 'Especificación Formal',
        autogenerate: { directory: 'especificacion' },
      },
      {
        label: 'Expresiónes Regulares',
        autogenerate: { directory: 'expresionregulares' },
      },
      {
        label: 'Manual de Referencia',
        autogenerate: { directory: 'manual' },
      },
      {
        label: 'Manual de Programador',
        autogenerate: { directory: 'manualprogramador' },
      },
      {
        label: 'Análisis Léxico',
        autogenerate: { directory: 'lexico' },
      },
      {
        label: 'Análisis Semántico',
        autogenerate: { directory: 'semantico' },
      },
      {
        label: 'Analizador Sintáctico',
        autogenerate: { directory: 'sintactico' },
      },
    ],

    plugins: [starlightThemeObsidian({
    graph: false
  })]
  }), markdoc()],
});