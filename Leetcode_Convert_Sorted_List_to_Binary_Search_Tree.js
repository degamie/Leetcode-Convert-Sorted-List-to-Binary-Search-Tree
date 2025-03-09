var sortedListToBST = function(head) {
  //Newer Approach
  //T(C(N)) and S(C(N)) ==O(N) as it requires Dynamic memory space alloc iteratively
     let curr = head, count = 0//Current  Declare and Count initialize
    while (curr) curr = curr.next, count++//iterating through current 
    const treeify = (i, j) => {//Treeify Const var declare
        if (j < i) return null//printing Initial Val to next Var
        let mid = i + j >> 1, node = new TreeNode()//mid val defclare
        node.left = treeify(i, mid - 1)//left Node declare
        node.val = curr.val, curr = curr.next//
        node.right = treeify(mid + 1, j)//right Node declare
        return node//Node Printing 
    }
    curr = head//Head Assignement
    return treeify(1, count)//printing final output
    };
    //Older Approach
    // if(head==null)return null;
    // let mid=mid(head);
    // TreeNode root=new TreeNode(mid.val);
    // if(head==mid)return root;
    // root.left=sortedListToBST(head);
    // root.right=sortedListToBST(mid.next);
    // return root;
