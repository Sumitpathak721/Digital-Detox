module.exports = 
{

	ChatbotReply:function(message)
	{
		// Bot's data
		this.Bot_Age = 22;
		this.Bot_Name = "Abdelrahman Radwan";
		this.Bot_University = "Ain Shams University";
		this.Bot_Country = "Egypt";
		// User data
		this.User_Age;
		this.User_Name;
		this.User_University;
		// Message processing... 
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if(message.indexOf("report") > -1 || message.indexOf("legal action") > -1 || message.indexOf("Stop toxicity") > -1 )
		{
			return "You can go to our homapage for reporting or visit offical cyber crime portal";
		}
		
		else if(message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you"))
		{
			return "I live in" + this.Bot_Country;
		}
		return "Sorry, I didn't get it :( ";
	}


};