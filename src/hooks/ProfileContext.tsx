import { Profile, Social, Strength } from "@prisma/client";
import axios from "axios";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ProfileContextProps {
    children: ReactNode;
}

interface IProfileContextValue{
    profile: Profile[]
    Strength: Strength[],
    Social: Social[]
}

const ProfileContext = createContext<IProfileContextValue | undefined>(undefined);

export function ProfileContextProvider({ children }: ProfileContextProps){
    const [profile, setProfile] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3011/profile');
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const contextValue: IProfileContextValue = {
        profile,
        Strength: [],
        Social: [],  
      };
    
    return(
        <ProfileContext.Provider value={contextValue}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile(){
    const context = useContext(ProfileContext);
    if (context === undefined){
        throw new Error("Context must be used within a provider");
    }
    return context;
}