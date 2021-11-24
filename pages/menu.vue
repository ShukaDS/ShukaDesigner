<template>
	<Menu>
		<MenuButton>More</MenuButton>
		<MenuItems>
			<!-- Use the `active` slot prop to conditionally style the active item. -->
			<MenuItem v-slot="{ active }">
				<a
								:class="[
            active
              ? 'bg-blue-500 text-white'
              : 'bg-white text-black',
          ]"
								href="/account-settings"
				>
					Account settings
				</a>
			</MenuItem>
			<!-- ... -->
		</MenuItems>
	</Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
	components: {
		Menu,
		MenuButton,
		MenuItems,
		MenuItem,
	},
};
</script>
