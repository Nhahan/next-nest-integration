export default function Home() {
    let foods = ['사과', '배', '감', '귤', '바나나']
    return (
        <div>
            <h4>상품목록</h4>
            {
                foods.map((food, i) => {
                    return (
                        <div className="food" key={i}>
                            <h5>{food}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}
