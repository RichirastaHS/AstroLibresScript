// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian'
import markdoc from '@astrojs/markdoc';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
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

  vite: {
    plugins: [tailwindcss()],
  },
});