
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        tech: "border-transparent bg-guild-tech/20 text-guild-tech hover:bg-guild-tech/30",
        creative: "border-transparent bg-guild-creative/20 text-guild-creative hover:bg-guild-creative/30",
        leadership: "border-transparent bg-guild-leadership/20 text-guild-leadership hover:bg-guild-leadership/30",
        analytics: "border-transparent bg-guild-analytics/20 text-guild-analytics hover:bg-guild-analytics/30",
        marketing: "border-transparent bg-guild-marketing/20 text-guild-marketing hover:bg-guild-marketing/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
