from src.sorting import sort_by


jobs = [
    {
        "min_salary": 1500,
        "max_salary": 35000,
        "date_posted": "2019-09-09"
    },
    {
        "min_salary": 2500,
        "max_salary": 15000,
        "date_posted": "2014-03-02"
    },
    {
        "min_salary": 3500,
        "max_salary": 25000,
        "date_posted": "2012-01-01"
    }
]

sort_by_min_salary = [
    jobs[0],
    jobs[1],
    jobs[2],
]

sort_by_max_salary = [
    jobs[0],
    jobs[2],
    jobs[1],
]

sort_by_date_posted = [
    jobs[0],
    jobs[1],
    jobs[2],
]


def test_sort_by_criteria():
    sort_by(jobs, "min_salary")
    assert jobs == sort_by_min_salary

    sort_by(jobs, "max_salary")
    assert jobs == sort_by_max_salary

    sort_by(jobs, "date_posted")
    assert jobs == sort_by_date_posted
