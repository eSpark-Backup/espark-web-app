const hash = () => {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  };

export const faqsQuestions = [ 
                        {   _id:hash(),
                            question:"How do I create a product with you?", 
                            answer:"If you have an idea contact us by our online form, e-mail or phone. We'll meet and talk it over. Just be sure to prepare as much info about your idea as possible, it will smoothen the meeting and benefit further cooperation. If you don't know how to get around to it, go ahead to our site: www.esparkconsultants.com."
                        },
                        {   _id:hash(),
                            question:" What do I need to know before contacting you?", 
                            answer:"Well, the most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application. You don't want to spend many months developing it with us without being sure what you need. If you have no experience in app development feel free to contact us. We'll also be glad to help you get started, building projects from scratch is nothing new for us."
                        },
                        {   _id:hash(),
                            question:"How much time will it take for you to make my app?", 
                            answer:"To give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and we'll be able to estimate how long it will take after at least a month of work. Don't worry, if you're not happy with our work after two weeks you can retract from the project with no penalties, this is our trial period and we believe that any reliable software house should give you one."
                        },        
                        {   _id:hash(),
                            question:"How do you guarantee product quality?", 
                            answer:"We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for."
                        },
                        {   _id:hash(),
                            question:"How can I be sure you work at my project as much as you declare? ", 
                            answer:"We thoroughly monitor our developers and control how much time they spend on each task down to the exact minute. We use Harvest software and Redmine to track time spent on your project."
                        },        
                        {   _id:hash(),
                            question:"Are you able to double the size of the team involved in the project if the need arises?", 
                            answer:"Whether you want to expand your product or create a completely new one simultaneously, and then again focus only on one of your projects, we are always ready to adapt to your requirements. If the work is less intense, team size can be reduced. When improvements need to be implemented fast, we can quickly assign additional team members to speed up each phase of the development process."
                        }        
                   ];
