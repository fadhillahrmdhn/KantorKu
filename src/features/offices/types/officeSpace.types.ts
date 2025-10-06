export type OfficeSpace = {
id: number;
title: string;
slug: string;
price: number;
duration: string;
address: string;
about: string;
location: string;
rating: number;
tags: string[];
image: string;
images: string[];
features: string[];
salesContacts: SalesContact [];
isFullyBooked: boolean;
}

export type SalesContact = {
name: string;
role: string;
photo: string;
}

export type OfficeSpaceResponse = {
    officeSpace: OfficeSpace;
}