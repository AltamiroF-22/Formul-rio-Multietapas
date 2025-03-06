export interface YourInformation {
    name: string;
    email:string;
    phoneNumber: string; 
}

export interface SelectPlan {
    plan: "arcade" | "advanced" | "pro";
    monthly:boolean;
}

export interface AddOns {
    selectedAddOns: string[];
}