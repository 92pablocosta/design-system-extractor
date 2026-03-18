export function buildAIContext(designSystem, url) {
  return `# Contexto de Design System

Página analisada: ${url}

## Objetivo
Use o design system abaixo como referência visual e estrutural para gerar interfaces novas, mantendo consistência de estilo.

## Foundations
${JSON.stringify(designSystem.foundations, null, 2)}

## Components
${JSON.stringify(designSystem.components, null, 2)}

## Instruções para IA
- Preserve a linguagem visual geral.
- Reutilize cores e tipografia dominantes.
- Mantenha consistência em bordas, radius, sombras e espaçamento.
- Gere componentes semanticamente organizados.
- Não copie o HTML original; apenas use o sistema visual como referência.
- Priorize clareza, hierarquia visual e responsividade.

## Tarefa sugerida
"Gere uma landing page moderna baseada neste design system, com hero, benefícios, seção de prova social, CTA e rodapé."
`;
}