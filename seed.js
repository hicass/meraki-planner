require('dotenv').config();
require('./config/database');

const Quote = require('./models/quote');

(async function() {
    await Quote.deleteMany({});
    const quotes = await Quote.create([
        {text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.", author: "Nelson Mandela"},
        {text: "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.", author: "Wayne Dyer"},
        {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
        {text: "Learn the rules like a pro, so you can break them like an artist.", author: "Pablo Picasso"},
        {text: "I didn't get there by wishing for it or hoping for it, but by working for it.", author: "Estée Lauder"},
        {text: "If you can dream it, you can do it.", author: "Walt Disney"},
        {text: "Even if you are on the right track, you'll get run over if you just sit there.", author: "Will Rogers"},
        {text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi "},
        {text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
        {text: "The ones who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs"},
        {text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou"},
        {text: "Follow your bliss and the universe will open doors where there were only walls.", author: "Joseph Campbell"},
        {text: "A year from now you may wish you had started today.", author: "Karen Lamb"},
        {text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray"},
        {text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou"},
        {text: "Nothing lasts forever. Not even your troubles.", author: "Arnold H Glasgow"},
        {text: "The only place you find success before work is in the dictionary.", author: "May V. Smith"},
        {text: "Hope never abandons you, you abandon it.", author: "George Weinberg"},
        {text: "Those who dare to fail miserably can achieve greatly.", author: "John F. Kennedy"},
        {text: "Go until you fail, then keep going.", author: "Jason Feifer"},
        {text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein"},
        {text: "Don't let the noise of others' opinions drown out your own inner voice.", author: " Steve Jobs"},
        {text: "If you obey all the rules, you miss all the fun.", author: "Katherine Hepburn"},
        {text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney"},
        {text: "Tough times never last, but tough people do.", author: "Robert H. Shuller"},
        {text: "Remember why you started."},
        {text: "Be so good they can't ignore you.", author: "Steve Martin"},
        {text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair"},
        {text: "If it doesn't challenge you, it won't change you."},
        {text: "There is only one thing that makes a dream impossible to achieve: the fear of failure.", author: "Paulo Coelho"},
        {text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart"},
        {text: "Power's not given to you. You have to take it.", author: "Beyoncé"},
        {text: "What you do makes a difference, and you have to decide what kind of difference you want to make.", author: "Jane Goodall"},
        {text: "Twenty years from now you will be more disappointed by the things you didn't do than by the things you did.", author: "Mark Twain"},
        {text: "It is never too late to be what you might have been.", author: "George Eliot"},
        {text: "The greatest danger for most of us is not that our aim is too high and we miss it but that it is too low and we reach it.", author: "Michelangelo"},
        {text: "You can fall, but you can rise also.", author: "Angelique Kidjo"},
        {text: "Feet, what do I need you for when I have wings to fly?", author: "Frida Kahlo"},
        {text: "I shall plant my hands in the garden. And I will grow.", author: "Forough Farrokhzad"},
        {text: "It's not the load that breaks you down, it's the way you carry it.", author: "Lena Horne"},
        {text: "What would life be if we had no courage to attempt anything?", author: "Vincent Van Gogh"},
        {text: "Decide whether or not the goal is worth the risks involved. If it is, stop worrying.", author: "Amelia Earhart"},
        {text: "Find something you're passionate about and keep tremendously interested in it.", author: "Julia Child"},
        {text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison"},
        {text: "Where there is love and inspiration, I don't think you can go wrong.", author: "Ella Fitzgerald"},
        {text: "Love the life you live. Live the life you love.", author: "Bob Marley"},
        {text: "In the midst of chaos, there is also opportunity.", author: "Sun Tzu"},
        {text: "Talk to yourself like someone you love.", author: "Brené Brown"},
        {text: "You are your best thing.", author: "Toni Morrison"},
        {text: "Vulnerability is the birthplace of innovation, creativity and change.", author: "Brené Brown"},
    ]);

    console.log(quotes);

    process.exit();
})();