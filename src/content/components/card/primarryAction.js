export const primaryAction = `<div id="container" class="grid grid-cols-2 sm:grid-cols-4 gap-2"></div>
<script>
	const items = [
		{
			name: "Apple",
			imageSrc:
				"https://images.pexels.com/photos/6157055/pexels-photo-6157055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			price: "5.99"
		},
		{
			name: "Pineapple",
			imageSrc:
				"https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "9.99"
		},
		{
			name: "Orange",
			imageSrc:
				"https://images.unsplash.com/photo-1586439702132-55ce0da661dd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D",
			price: "7.99"
		},
		{
			name: "Avocado",
			imageSrc:
				"https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXRzfGVufDB8fDB8fHww",
			price: "3.70"
		},
		{
			name: "Watermelon",
			imageSrc:
				"https://plus.unsplash.com/premium_photo-1681473548376-4a510b4bf66d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "12.99"
		},
		{
			name: "Lemon",
			imageSrc:
				"https://images.unsplash.com/photo-1531697218799-ed0ae884c6c8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "8.00"
		},
		{
			name: "Banana",
			imageSrc:
				"https://images.unsplash.com/photo-1623227774108-7ab4478f50cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "4.49"
		},
		{
			name: "Strawberry",
			imageSrc:
				"https://plus.unsplash.com/premium_photo-1724256149016-05c013fe058e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "8.30"
		}
	];

	items.forEach(item => {
		const card = document.createElement("div")
		card.className = "card shadow-small"
		card.dataset.pressable = "true"
		
		card.innerHTML = \`<div class="card-body !overflow-visible !p-0">
				<div class="img-wrapper h-[140px] shadow-small radius-lg"><img src="\${item.imageSrc}" class="h-[140px] w-full object-cover" alt="\${item.name}"></div>
			</div>
			<div class="card-footer text-sm justify-between">
				<b>\${item.name}</b>
				<p class="text-[hsl(var(--default-500))]">$\${item.price}</p>
			</div>\`
		
		document.querySelector("#container").appendChild(card)
	})
</script>`;
