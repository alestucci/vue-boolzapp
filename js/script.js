const app = new Vue({
	el: "main",
	data: {
		mainUser: {
			name: "Alessandro",
			image: "img/avatar_8.jpg",
		},
		activeIndex: 0,
		searchString: "",
		msgMenuActive: null,
		chatArray: [
			{
				name: "Michele",
				image: "img/avatar_1.jpg",
				newMessage: "",
				messages: [
					{
						date: "20220317T09:52:44",
						content: "Ciao Michele",
						sent: true,
					},
					{
						date: "20220317T09:53:50",
						content: "Ciao Alessandro",
						sent: false,
					},
					{
						date: "20220317T10:00:13",
						content: "Raccontami una barzelletta",
						sent: true,
					},
					{
						date: "20220317T10:08:25",
						content:
							"Un basso e una chitarra litigano: non riescono a trovare un accordo",
						sent: false,
					},
					{
						date: "20220317T10:09:55",
						content: "🤦🏻",
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
						date: "20220316T20:12:37",
						content: "Ciao Alessandro!",
						sent: false,
					},
					{
						date: "20220316T20:13:44",
						content: "Ciao Fabio, come stai?",
						sent: true,
					},
					{
						date: "20220316T20:14:55",
						content: "Bene, grazie! E tu?",
						sent: false,
					},
					{
						date: "20220316T20:16:13",
						content: "Non c'è male... VueJS mi tormenta!",
						sent: true,
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
						content:
							"Ciao Samuele, non ti dimenticare di portarmi quei documenti!",
						sent: true,
					},
					{
						date: "20220315T09:55:14",
						content: "Quali documenti?",
						sent: false,
					},
					{
						date: "20220315T09:56:34",
						content: "Quelli necessari per il contratto",
						sent: true,
					},
					{
						date: "20220315T10:01:27",
						content:
							"Ok, capo. Fammi sapere quando posso chiamarti che devo chiederti un paio di informazioni a riguardo.",
						sent: false,
					},
				],
			},
			/*{
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
			},*/
			{
				name: "Claudia",
				image: "img/avatar_6.jpg",
				newMessage: "",
				messages: [
					{
						date: "20220315T09:52:44",
						content: "Alessandro come sta andando il corso?",
						sent: false,
					},
					{
						date: "20220315T09:53:14",
						content: "Bene!",
						sent: true,
					},
					{
						date: "20220315T09:54:25",
						content: "Sto imparando un sacco di cose nuove",
						sent: true,
					},
					{
						date: "20220315T09:55:57",
						content: "E la pratica di pomeriggio è molto divertente",
						sent: true,
					},
				],
			},
			/*{
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
			},*/
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
		},
		switchMenu(index) {
			this.msgMenuActive = this.msgMenuActive === index ? null : index;
		},
		deleteMsg(index) {
			this.chatArray[this.activeIndex].messages.splice(index, 1);
			this.switchMenu(index);
		},
		trimString(string) {
			if (string.length > 30) {
				return string.substring(0, 30) + "...";
			} else {
				return string;
			}
		},
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
