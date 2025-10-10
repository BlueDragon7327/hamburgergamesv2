# 👻 Phantom V3 🎃
### yet another vulnerability has been found in the extension Securly, and since it is Halloween season, why not recode Phantom, eh?

this bypass is kind of a combination of Phantom v2 and WINE, where it takes advantage of the fact Securly relies on you being connected to internet to see your screen.

*TLDR: No internet, no spying.*

### Nerd stuff:

* Essentially, you load up the website with internet connected, it gets disguised as Google so you can do this in class, then it caches the games themselves with a serviceworker, then you can disable internet so Securly can't see your screen, then go ahead and play those cached games.
