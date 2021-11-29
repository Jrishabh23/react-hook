import { useContext, useState } from "react";
import { Button } from "./Button";
import { ThemeContext, NameContext } from "../Context/Context";

export const Home: React.FC = () => {
    const buttonName = "Add";
    const [name, setName] = useState("");
    const [userList, setUserList] = useState<string[]>([]);
    const [search, setSearch] = useState("");
    const [user, setUser] = useState<string | undefined>();

    const theme = useContext(ThemeContext);
    const userName = useContext(NameContext);

    const _addList = () => {
        setUserList([...userList, name]);
    };

    const _searchName = () => {
        const foundUser = userList.find((u) => {
            return u === search;
        });
        setUser(foundUser);
    };
    return (
        <>
            <div>
                {theme} {userName}
                {userList.map((u) => (
                    <li key={u}>{u}</li>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            <Button onClick={_addList} name={buttonName}></Button>
            <div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
            <Button onClick={_searchName} name={`Search`}></Button>
            <div>{user && user ? user : "User not found"}</div>
        </>
    );
};
