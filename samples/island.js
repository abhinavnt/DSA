var numIslands = function(grid) {
    let row =grid.length
    let col=grid[0].length
    let count=0;

    function dfs(i,j){
        if(i<0 || i>=row||j<0 || j>=col||grid[i][j]=='0') return 
        grid[i][j]='0'
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j+1)
        dfs(i,j-1)

    }

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(grid[i][j]=='1'){
                count++
                dfs(i,j)
            }
        }
    }

    return count
};