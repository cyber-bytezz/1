import Typography from "@mui/material/Typography";
import Image from "next/image";

const CLIENTS = [
  { name: "m", link: "https://www.mie.ie" },
  { name: "1", link: "https://jeppiaarcollege.org/" },
];

export function Customers() {
  return (
    <section className="px-8 py-8 overflow-hidden">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          <b>
            Higher-Ed Institutions using AI to personalize learning
          </b>
        </Typography>
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap justify-center">
            {CLIENTS.map((client, key) => (
              <a
                key={key}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-container"
              >
                <Image
                
                  alt={client.name}
                  width={200}
                  height={200}
                  src={`/logo/${client.name}.png`}
                  className="w-36 sm:w-40 mx-3 my-3"
                  layout="fixed"
                  priority
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
