import java.io.*;
import java.util.*;
class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int a, b, c;
            a = sc.nextInt();
            b = sc.nextInt();
            c = sc.nextInt();
            Solution obj = new Solution();
            ArrayList<Integer> ans = obj.quadraticRoots(a, b, c);
            if (ans.size() == 1 && ans.get(0) == -1)
                System.out.print("Imaginary");
            else
                for (Integer val : ans) System.out.print(val + " ");
            System.out.println();
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    public ArrayList<Integer> quadraticRoots(int a, int b, int c) {
        // code here
        ArrayList<Integer> result = new ArrayList<>();
        int discriminant = b * b - 4 * a * c;

        // Check if the discriminant is negative
        if (discriminant < 0) {
            result.add(-1);
        } else {
            // Calculate the roots
            double sqrtDiscriminant = Math.sqrt(discriminant);
            double root1 = (-b + sqrtDiscriminant) / (2 * a);
            double root2 = (-b - sqrtDiscriminant) / (2 * a);
            
            // Convert the roots to the greatest integers less than or equal to the actual roots
            int intRoot1 = (int)Math.floor(root1);
            int intRoot2 = (int)Math.floor(root2);
            
            // Add roots to the list in descending order
            if (intRoot1 >= intRoot2) {
                result.add(intRoot1);
                result.add(intRoot2);
            } else {
                result.add(intRoot2);
                result.add(intRoot1);
            }
        }
        
        return result;
    }
}