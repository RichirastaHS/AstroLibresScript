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
        label: 'Definición del Lenguaje de Programación Diseñado',
        autogenerate: { directory: 'sintaxisysemantica' },
      },
      {
        label: 'Analizador Léxico',
        autogenerate: { directory: 'lexico' },
      },
      {
        label: 'Analizador Sintáctico',
        autogenerate: { directory: 'sintactico' },
      },
      {
        label: 'Análisis Semántico',
        autogenerate: { directory: 'semantico' },
      },
      {
        label: 'Manual del Usuario',
        autogenerate: { directory: 'manual' },
      },
      {
        label: 'Manual de Programador',
        autogenerate: { directory: 'manualprogramador' },
      },
      {
        label: 'Bibliografía y Anexos',
        autogenerate: { directory: 'final' },
      },
    ],

    plugins: [starlightThemeObsidian({
    graph: false
  })]
  }), markdoc()],
});