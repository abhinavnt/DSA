    class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex){
        console.log('adding ver',vertex);
        
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]            
        }
    }

    edge(v1,v2){
        if(this.adjacencyList[v1]&&this.adjacencyList[v2]){
            
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)

        }else{
            console.log("not found  vertex");
            
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,"->",this.adjacencyList[vertex].join(","))
            
        }
    }


    //dfs
    dfs(start){
        let visited={}
        let result=[]

        const dfsrecrusive=(vertex)=>{
            if(!vertex) return 
           visited[vertex]=true
           result.push(vertex);
           for(let nighbour  of this.adjacencyList[vertex]){
             if(!visited[nighbour]){
                dfsrecrusive(nighbour)
             }  
           }
        }

        dfsrecrusive(start)
        return result
    }

bfs(start){
    let visited={}
    let result=[]
    let queue=[start]

    visited[start]=true

    while(queue.length){
        let vertex=queue.shift()
        result.push(vertex)

        for(let nighbour of this.adjacencyList[vertex]){
            if(!visited[nighbour]){
                visited[nighbour]=true
                queue.push(nighbour)
            }
        }
    }

    return result
}



}


const Graph2=new Graph()


Graph2.addVertex(32)
Graph2.addVertex(43)
Graph2.display()
Graph2.edge(43,32)
Graph2.display()
Graph2.display()


