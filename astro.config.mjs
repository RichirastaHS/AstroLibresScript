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
    ],

    plugins: [starlightThemeObsidian({
    graph: false
  })]
  }), markdoc()],
});