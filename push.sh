#!/bin/bash
num=100000
sum=0
for ((a=1; a<=$num; a++))
do

    if ! git --git-dir="./.git" diff --quiet

    then
        git add --all
        git commit -m "autoCommit"
        git push
        echo "  🔴 Делаем push в $a раз"
    # else
    #     echo "  🟢 Чисто."
    fi

    sleep 1s
done

read -p "Press enter to continue"
