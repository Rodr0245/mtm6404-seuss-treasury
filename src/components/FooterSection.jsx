const FooterSection = () => {
	return (
		<>
		<footer class="bg-white dark:bg-gray-900 mt-60">
				<div class="container px-6 py-8 mx-auto">
						<div class="flex flex-col items-center text-center">
								<p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Thanks for stopping by!</p>
						</div>

						<hr class="my-10 border-gray-200 dark:border-gray-700" />

						<div class="flex flex-col items-center sm:flex-row sm:justify-between">
								<p class="text-sm text-gray-500">© Nicolas Ortiz 2024. All Rights Reserved.</p>

								<div class="flex mt-3 -mx-2 sm:mt-0">
										<a href="https://tailwindcss.com" target='_blank' class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Tailwind CSS"> Tailwind </a>

										<a href="https://vitejs.dev" target='_blank' class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Vite JS"> Vite </a>

										<a href="https://rombo.co" target='_blank' class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Rombo Library"> Rombo </a>

										<a href="https://seussology.info" target='_blank' class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Seussology API"> SeussologyAPI </a>
								</div>
						</div>
				</div>
		</footer>
		</>
	)
};

export default FooterSection;