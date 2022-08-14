module.exports = {
	types: [
		{ value: ":sparkles: feat", name: "✨ feat:\tAdicionando um novo recurso" },
		{ value: ":bug: fix", name: "🐛 fix:\tCorrigindo um bug" },
		{
			value: ":memo: docs",
			name: "📝 docs:\tAdicionar ou atualizar a documentação",
		},
		{
			value: ":lipstick: style",
			name: "💄 style:\tAdicionar ou atualizar estilos, ui ou ux",
		},
		{
			value: ":recycle: refactor",
			name: "♻️  refactor:\tMudança de código que não corrige um bug nem adiciona um recurso",
		},
		{
			value: ":zap: perf",
			name: "⚡️ perf:\tMudança de código que melhora o desempenho",
		},
		{
			value: ":white_check_mark: test",
			name: "✅ test:\tAdicionando casos de teste",
		},
		{
			value: ":truck: chore",
			name: "🚚 chore:\tAlterações no processo de compilação ou ferramentas auxiliares\n\t\te bibliotecas como geração de documentação",
		},
		{ value: ":rewind: revert", name: "⏪️ revert:\tReverter para um commit" },
		{ value: ":construction: wip", name: "🚧 wip:\tTrabalho em progresso" },
		{
			value: ":construction_worker: build",
			name: "👷 build:\tAdicione ou atualize em relação ao processo de compilação",
		},
		{
			value: ":green_heart: ci",
			name: "💚 ci:\tAdicione ou atualize em relação ao processo de compilação",
		},
	],

	scopes: [
		{ name: "ui" },
		{ name: "android" },
		{ name: "ios" },
		{ name: "home" },
		{ name: "planner" },
		{ name: "settings" },
	],

	scopeOverrides: {
		fix: [
			{ name: "merge" },
			{ name: "style" },
			{ name: "test" },
			{ name: "hotfix" },
		],
	},

	messages: {
		type: "Selecione o tipo de alteração que você está confirmando:",
		scope: "\nQual o ESCOPO desta mudança (opcional):",
		// used if allowCustomScopes is true
		customScope: "Indique o ESCOPO desta mudança:",
		subject: "Escreva uma BREVE descrição da mudança:\n",
		body: 'Forneça uma descrição MAIS LONGA da mudança (opcional). Use "|" para quebrar nova linha:\n',
		breaking: "Liste quaisquer QUEBRAS DE MUDANÇAS (opcional):\n",
		footer:
			"Liste as ISSUES para fechar esta mudança (opcional). E.g.: #31, #34:\n",
		confirmCommit: "Tem certeza de que deseja continuar com o commit acima?",
	},

	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	// skip any questions you want
	skipQuestions: ["body"],
	subjectLimit: 100,
};
