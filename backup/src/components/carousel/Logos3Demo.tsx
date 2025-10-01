import { Logos3 } from "@/components/ui/logos3"

const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Google",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Microsoft",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Apple",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Amazon",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Meta",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Netflix",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Spotify",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "Uber",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      className: "h-7 w-auto",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };
