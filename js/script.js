const app = new Vue({
	el: "main",
	data: {
		mainUser: {
			name: "Alessandro",
			image: "img/avatar_8.jpg",
		},
		activeIndex: 0,
		searchString: "",
		chatArray: [
			{
				name: "Michele",
				image: "img/avatar_1.jpg",
				newMessage: "",
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
				newMessage: "",
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
				newMessage: "",
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
				newMessage: "",
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
				newMessage: "",
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
				newMessage: "",
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
				newMessage: "",
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
				newMessage: "",
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
	},
	methods: {
		dateTransformIt(date) {
			return luxon.DateTime.fromISO(date).toFormat("dd/MM/yyyy HH:mm");
		},
		newMessageAdd(index) {
			const message2Insert = {
				date: luxon.DateTime.now(),
				content: this.chatArray[index].newMessage,
				sent: true,
			};
			this.chatArray[index].messages.push(message2Insert);
		},
		replyMessage(index) {
			const messageReplied = {
				date: luxon.DateTime.now(),
				content: "Ok!",
				sent: false,
			};
			this.chatArray[index].messages.push(messageReplied);
		},
		newMessageAndReply(index) {
			this.newMessageAdd(index);
			this.chatArray[index].newMessage = "";
			setTimeout(() => {
				this.replyMessage(index);
			}, 1000);
		}
	},
	computed: {
		filteredContacts() {
			return this.chatArray.filter((contact) => {
				return contact.name
					.toLowerCase()
					.includes(this.searchString.toLowerCase());
			});
		},
	},
});
