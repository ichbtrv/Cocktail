# Cocktail App

A web app to look up cocktail ingredients and instructions from the CocktailDB api. <br/>
I really wanted to explore the most modern version of Redux having worked primarily with older versions and several other different state management libraries. 
Built with:
- Next.js
- Tailwind
- Typescript
- ReduxToolkit/RTKQuery

<img src="https://i.imgur.com/8o2Q7Em.jpg" width="750"/>

## Tech Used

### Next
I used next for the several different reasons:
1. dynamic and file based routing, it meshes pretty seamlessly with ReduxToolkit and getting the dynamic routing linked to state was relatively straightforward.
2. So far its been incrementally adoptable, which is nice because it allows me to revisit old projects without reconfiguring them if I get busy with work.
3. SSR/CSR flexibility
4. Quick deployment through vercel
5. I haven't tried this one out yet but: nested layouts 
<img src="https://i.imgur.com/ADuDbtR.jpg" width="750"/>

### Tailwind
Honestly I just love using it, sometimes I do resort to modules especially when using some of the components I already had prebuilt to save time on configuration (and even then it's not uncommon for me to see reason for using them in tandem). It's quick to lay stuff down, especially when you are exploring other tech but still want to try to have a relatively smooth UI. 

<img src="https://i.imgur.com/63qoNvH.jpg" width="750"/>

### Typescript

Just a go to at this point. At first I started learning it because it seemed like it was becoming more and more of a standard but now I can't go back. It was a little tricky to use with ReduxToolkit but generally I think its a great tool because it helps me fail fast and catch errors faster. I thought of a scenario as an allegory to my experience with using typescript over vanilla JS and it goes like this:
<br/>
<br/>
You go to the laundromat with your two friends Javascript and Typescript. 
<br/>
You proceed to put your dirty dishes into the washing machine, and turn to your friends to see their reaction.
<br/>
- **Typescript**, with half of their hair already missing from your previous misadventures is actively working on the other half and screams out: <br/> **"WHAT ARE YOU DOING??"**

- **Javascript**, shrugs their shoulders and says: **"Well. The dishes are dirty and it is a washing machine."**  <br/> 
<br/>

<img src="https://i.imgur.com/jkYkzuk.jpg" width="250"/>

### ReduxToolkit/RTKQuery

As mentioned previously, I wanted to go more in depth with the most modern version of Redux and to help myself be more informed when thinking about overall architecture of larger scale apps. This app currently is pretty straightforward, yet definitely not without flaws, but I think in some of the potential features I'll mention in the next part will really force me start thinking about its use pattern and which tools to take the most advantage of, where and why. 

<img src="https://i.imgur.com/gJvYZWw.jpg" width="750"/>

## What it's missing

I'll start by making a list and then expanding on some while leaving others to speak for themselves, because currently I think the UX is definitely lacking. 

1. **Users/Auth/Community** - I think that with the ability to have an account you would be able to save some favorites for easier access which would open up a more focused space on coming up with caching strategies. Also I think the ability to add your own creations to share with other users would make this feel a lot less impersonal, and just generally more fun!
2. **History/Search Suggestions/Filters/Browse** - Currently when you land on the home page it says "Find a Cocktail
Recipe". I think most people if they knew what they were looking for I.E say, a Michelada, would probably just go to google and type that in. Creating a more user friendly pathway to discover new drinks would definitely increase the usability of this app. This is where filters and search suggestions come in. Say you want something with a certain kind of alcohol, set it as a filter. Suggestions could help speed up flow for all search cases, and History or a Favorites could help increase app reuse, especially when paired with a potential community aspect. 
3. **Better Formatting / More complete drink profiles**
4. **Paginated Results**
5. **Caching**
6. **External Resources** (video tutorials?, thinking out loud here)
7. **Cross Platform capabilites**
8. **Better SEO**
9. **Pairings**
10. **More Component Abstraction** -I think I used a couple of components from my personal component library that I have been working on but the rest were built specifically for the context of their immediate use, and I am already seeing some overlap. 



