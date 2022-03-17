const app = new Vue({
	el: "main",
	data: {
		mainUser: {
			name: "Alessandro",
			image: "img/avatar_8.jpg",
		},
		chatArray: [
			{
				name: "Michele",
				image: "img/avatar_1.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
				],
			},
			{
				name: "Fabio",
				image: "img/avatar_2.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
				],
			},
			{
				name: "Samuele",
				image: "img/avatar_3.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
				],
			},
			{
				name: "Alessandro B.",
				image: "img/avatar_4.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
				],
			},
			{
				name: "Alessandro L.",
				image: "img/avatar_5.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
				],
			},
			{
				name: "Claudia",
				image: "img/avatar_6.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
				],
			},
			{
				name: "Federico",
				image: "img/avatar_7.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
				],
			},
			{
				name: "Davide",
				image: "img/avatar_8.jpg",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: false,
					},
					{
						date: "20220315T09:52:44",
						content: "Lorem ipsum dolor sit amet",
						sent: true,
					},
				],
			},
		],
		activeIndex: 0,
	},
});
