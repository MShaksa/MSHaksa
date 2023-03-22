import turtle

# 펜 색상, 굵기 설정
turtle.pencolor('blue')
turtle.pensize(3)

# 별 모양 그리기
for i in range(5):
    turtle.forward(100)
    turtle.right(144)

# 창 닫기
turtle.done()
