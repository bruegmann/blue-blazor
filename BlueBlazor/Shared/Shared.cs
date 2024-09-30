namespace BlueBlazor.Shared
{

    public enum ButtonType
    {
        Button,
        Submit,
        Reset
    }

    public enum ButtonStyle
    {
        Default,
        Outline,
        Soft,
        Plain
    }

    public enum ButtonTone
    {
        Primary,
        Secondary,
        Success,
        Danger,
        Warning,
        Info,
        Light,
        Dark,
        Link,
        Theme
    }

    public enum ButtonSize
    {
        sm,
        lg
    }

    public enum BreakSize
    {
        sm,
        md,
        lg,
        xl
    }

    public class Utils
    {
        public static string GetButtonClass(ButtonStyle style, ButtonTone tone, ButtonSize? size)
        {
            string prefix = style switch
            {
                ButtonStyle.Outline => "btn-outline-",
                ButtonStyle.Soft => "blue-btn-soft-",
                ButtonStyle.Plain => "blue-btn-plain-",
                _ => "btn-"
            };

            return $"btn {prefix}{tone.ToString().ToLower()} {(size != null ? $"btn-{size?.ToString().ToLower()}" : "")}";
        }
    }

    public class ButtonVariant
    {
        ButtonStyle Style = ButtonStyle.Default;
        ButtonTone Tone = ButtonTone.Secondary;
        ButtonSize? Size;

        public void Primary()
        {
            Tone = ButtonTone.Primary;
        }

        public string GetButtonClass()
        {
            return Utils.GetButtonClass(Style, Tone, Size);
        }
    }
}