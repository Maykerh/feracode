import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

import { BsCalendar } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

import ContentLayout from "../../components/ContentLayout";
import ContentHeader from "../../components/ContentHeader";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import AvatarInput from "../../components/AvatarInput";

import {
    ContentWrapper,
    Cover,
    AvatarWrapper,
    InfoWrapper,
    Name,
    UserName,
    Description,
    DateJoined,
    Status,
    ViewList,
    Location,
} from "./styles";
import Timeline from "../../components/Timeline";

const fakeUserData = {
    name: "Mayke",
    userName: "@Mayke",
    description: "Sei la a descrição",
    dateJoined: new Date(2020, 3, 1),
    avatarUrl:
        "https://pbs.twimg.com/profile_images/1389213280/OgAAANmkk6Kx8ebiAORq1MgHAYu30W90u6PTs0A4Z6qiLeneJ485Mh42Cn2EZoS5OTTR7AlDQRGU5i1ilJejOpnFsfMAm1T1UNriALlCN4ZHqt5Te21nfh-IMrHR_400x400.jpg",
    tweets: 501,
    location: "Joinville",
    following: 150,
    followers: 200,
};

function UserProfile() {
    const [userData, setUserData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const loadUserData = () => {
            setUserData(fakeUserData);
        };

        loadUserData();

        setIsLoading(false);
    }, []);

    const ProfileComponent = isLoading ? (
        <div>Carregando...</div>
    ) : (
        <div id="temp">
            <ContentHeader title={userData.name} />
            <ContentWrapper>
                <Cover />
                <AvatarWrapper>
                    <Avatar
                        url={userData.avatarUrl}
                        name={userData.name}
                        width={"150px"}
                        height={"150px"}
                    />
                    <Button
                        text={"Edit Profile"}
                        width={"130px"}
                        onClick={() => setIsModalOpen(true)}
                    />
                </AvatarWrapper>
                <InfoWrapper>
                    <Name>{userData.name}</Name>
                    <UserName>{userData.userName}</UserName>
                    <Description>{userData.description}</Description>
                    <Location>
                        <GrLocation size={18} />
                        <span>{userData.location}</span>
                    </Location>
                    <DateJoined>
                        <BsCalendar size={18} />
                        <span>
                            {format(userData.dateJoined, "'Joined' MMMM yyyy", {
                                locale: enUS,
                            })}
                        </span>
                    </DateJoined>
                    <div>
                        <Status>
                            <span>{userData.following}</span>
                            Following
                        </Status>
                        <Status>
                            <span>{userData.followers}</span>
                            Followers
                        </Status>
                    </div>
                </InfoWrapper>
                <ViewList active={1}>
                    <div>
                        <span>Tweets</span>
                    </div>
                    <div
                        onClick={() => {
                            alert("not implemented");
                        }}
                    >
                        <span>Tweets & replies</span>
                    </div>
                    <div
                        onClick={() => {
                            alert("not implemented");
                        }}
                    >
                        <span>Media</span>
                    </div>
                    <div
                        onClick={() => {
                            alert("not implemented");
                        }}
                    >
                        <span>Likes</span>
                    </div>
                </ViewList>
                <Timeline />
            </ContentWrapper>
        </div>
    );

    function getViewContent() {
        return (
            <div>
                <AvatarInput />
                <Input labelText="Name" name="name" value={userData.name} />
                <Input labelText="Bio" name="name" value={userData.description} />
                <Input labelText="Location" name="name" value={userData.location} />
            </div>
        );
    }

    function onEdit() {
        setIsModalOpen(true);
    }

    return (
        <>
            <ContentLayout
                centerComponent={ProfileComponent}
                rightComponent={<div>{"COnteudo"}</div>}
            />
            <Modal
                title={"Edit profile"}
                getContent={getViewContent}
                isOpen={isModalOpen}
                onSave={data => console.log(["salvou", data])}
                onClose={() => setIsModalOpen(false)}
                width={70}
                height={70}
            />
        </>
    );
}

export default UserProfile;
