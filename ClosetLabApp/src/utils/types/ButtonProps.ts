export type CustomButtonVariant = "primary" | "secondary" | "tertiary";

export type CustomButtonProps = {
    title: string;
    onPressButton: () => void;
    variant?: CustomButtonVariant 
    disabled?: boolean 
}