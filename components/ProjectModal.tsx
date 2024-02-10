import { Box, Modal } from "@mui/material";
import { FC } from "react";

type ModalProps = {
  open: boolean;
  id: string;
  close: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#FF7F50",
  boxShadow: 24,
  p: 4,
};

const ProjectModal: FC<ModalProps> = ({ open, id, close }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <div className="flex flex-col">
          {id === "1" && (
            <>
              <h1 className="text-center text-3xl">Game Place</h1>
              <p className="mt-3 text-center text-lg">
                This project is a C# WinForms application that allows users to
                access a database of games and add, edit, and delete games from
                the database. The application also allows users to search for
                games by title, genre, or platform. The application uses
                Microsoft Access. The application also uses a custom-built ORM
                to interact with the database.
              </p>
              <span className="mt-5">
                Github Link:{" "}
                <a
                  href="https://github.com/lucas-codes-stuff/game-place"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline"
                >
                  Game Place
                </a>
              </span>
            </>
          )}
          {id === "2" && (
            <>
              <h1 className="text-center text-3xl">Doggy Daycare</h1>
              <p className="mt-3 text-center text-lg">
                This project is a vanilla HTML and CSS project that was built
                during my first web development class. We were tasked with
                designing a custom company website. This was my first website
                that I built from scratch. I used the old float design style for
                the layout of the website. I also used a lot of custom CSS to
                style the website.
              </p>
              <span className="mt-5">
                Github Link:{" "}
                <a
                  href="https://github.com/lucas-codes-stuff/DoggyDaycare"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline"
                >
                  Doggy Daycare
                </a>
              </span>
            </>
          )}
          {id === "3" && (
            <>
              <h1 className="text-center text-3xl">DU File System</h1>
              <p className="mt-3 text-center text-lg">
                This is a C# terminal application that allows users to interact
                with a custom file system that I designed for my Operating
                Systems class. This is a simple program that allows users to
                allocate a block of memory to mount as a file system. The user
                can then write and read text from the allocated memory. It also
                includes truncate and delete functionality.
              </p>
              <span className="mt-5">
                Github Link:{" "}
                <a
                  href="https://github.com/lucas-codes-stuff/du-file-system"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline"
                >
                  DU File System
                </a>
              </span>
            </>
          )}
          {id === "4" && (
            <>
              <h1 className="text-center text-3xl">JamSync Mobile</h1>
              <p className="mt-3 text-center text-lg">
                This project is a React Native application that allows users to
                access the setlistfm API to search for setlists from concerts.
                The user can also search for songs and add them to a setlist.
                The user can also add songs to a setlist and then share the
                setlist with other users. The user can also view other
                users&apos; setlists and add songs to their own setlists.
                Includes functionality to create playlists from setlists. This
                application also includes a blog and venue information. (Still a
                work in progress)
              </p>
            </>
          )}
          {id === "5" && (
            <>
              <h1 className="text-center text-3xl">
                Hospital Management System
              </h1>
              <p className="mt-3 text-center text-lg">
                This program was built using React and an Access database with a
                .NET backend (built using C#). The program allows users to
                interact with a database of patients, doctors, and appointments.
                The program allows users to add, edit, and delete patients,
                doctors, and appointments. The hospital management system also
                allows users to login as patients and doctors. When logged in a
                doctor you can manage medications and appointments. When logged
                in as a patient you can view your appointments and medications.
              </p>
              <span className="mt-5">
                Github Link:{" "}
                <a
                  href="https://github.com/lucas-codes-stuff/hospitalmanagement"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline"
                >
                  Hospital Management System
                </a>
              </span>
            </>
          )}
          {id === "6" && (
            <>
              <h1 className="text-center text-3xl">Sh**ty Memes on Shirts</h1>
              <p className="mt-3 text-center text-lg">
                This is a personal project that is being built in Angular and a
                .NET backend (with C#). The project is a simple e-commerce
                website that focuses on creating custom memes and utilizing user
                designs for various products. The website will allow users to
                create an account and upload their own designs. The website will
                also allow users to purchase products with their designs on
                them. The website will also allow users to view other
                users&apos; designs and purchase products with those designs on
                them (Still a work in progress)
              </p>
            </>
          )}
          {id === "7" && (
            <>
              <h1 className="text-center text-3xl">Huffman Coding</h1>
              <p className="mt-3 text-center text-lg">
                This project is a C# program that allows users to compress and
                decompress files using the Huffman coding algorithm. The program
                allows users to select a file to compress and then select a
                location to save the compressed file. The program also allows
                users to select a compressed file to decompress and then select
                a location to save the decompressed file.
              </p>
              <span className="mt-5">
                Github Link:{" "}
                <a
                  href="https://github.com/lucas-codes-stuff/huffman-encoding"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline"
                >
                  Huffman Coding
                </a>
              </span>
            </>
          )}
          {id === "8" && (
            <>
              <h1 className="text-center text-3xl">Various Extras</h1>
              <div className="flex flex-col">
                <ul className="list-inside list-disc">
                  <li>
                    test
                    <ul className="ml-5 list-inside list-disc">
                      <li>test123</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
