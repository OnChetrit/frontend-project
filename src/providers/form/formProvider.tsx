"use client";
import React, {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

interface FormFields {
    firstName: string;
    lastName: string;
}

interface FormState {
    stepIndex: number;
    fields: FormFields;
}

const FormContext = createContext<FormState | undefined>(undefined);
const FormDispatchContext = createContext<
    Dispatch<SetStateAction<FormState>> | undefined
>(undefined);

interface FormProviderProps {
    children: ReactNode;
}

function FormProvider({ children }: FormProviderProps) {
    const [formState, setFormState] = useState<FormState>({
        stepIndex: 0,
        fields: {
            firstName: "",
            lastName: "",
        },
    });

    return (
        <FormContext.Provider value={formState}>
            <FormDispatchContext.Provider value={setFormState}>
                {children}
            </FormDispatchContext.Provider>
        </FormContext.Provider>
    );
}

export { FormProvider, FormContext, FormDispatchContext };
